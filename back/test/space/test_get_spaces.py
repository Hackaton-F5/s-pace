from src.lib.utils import temp_file
from src.webserver import create_app
from src.domain.spaces import Space, SpacesRepository

def test_should_return_empty_list_of_spaces():
    space_repository = SpacesRepository(temp_file())
    app = create_app(repositories={"space": space_repository})
    client = app.test_client()

    response = client.get("/api/space")

    assert response.json == []

def test_should_return_list_of_spaces():
    space_repository = SpacesRepository(temp_file())
    app = create_app(repositories={"space": space_repository})
    client = app.test_client()

    espacio_1 = Space(
        id= "space1",
        name= "Espacio 1",
        image= "",
        price= "300",
        contact= "prueba@example.com",
        city= "Bilbao",
        description= "Espacio acogedor en el centro de Bilbao",
    )

    espacio_2 = Space(
        id= "space2",
        name= "Espacio 2",
        image= "",
        price= "500",
        contact= "example@prueba.com",
        city= "Gijón",
        description= "El mejor espacio de trabajo en Gijón",
    )

    space_repository.save(espacio_1)
    space_repository.save(espacio_2)

    response = client.get("/api/space")

    assert response.json == [
        
        {
            "id": "space1",
            "name": "Espacio 1",
            "image": "",
            "price": "300",
            "contact": "prueba@example.com",
            "city": "Bilbao",
            "description": "Espacio acogedor en el centro de Bilbao",
        },
        
        {
            "id": "space2",
            "name": "Espacio 2",
            "image": "",
            "price": "500",
            "contact": "example@prueba.com",
            "city": "Gijón",
            "description": "El mejor espacio de trabajo en Gijón",
        }
    ]

