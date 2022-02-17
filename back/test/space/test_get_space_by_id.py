from src.lib.utils import temp_file
from src.webserver import create_app
from src.domain.spaces import Space, SpacesRepository



def test_should_return_existing_space_by_id():

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

    response_espacio1 = client.get("/api/space/space1")
    response_espacio2 = client.get("/api/space/space2")

    assert response_espacio1.json == {
            "id": "space1",
            "name": "Espacio 1",
            "image": "",
            "price": "300",
            "contact": "prueba@example.com",
            "city": "Bilbao",
            "description": "Espacio acogedor en el centro de Bilbao",
        }
    
    assert response_espacio2.json == {
            "id": "space2",
            "name": "Espacio 2",
            "image": "",
            "price": "500",
            "contact": "example@prueba.com",
            "city": "Gijón",
            "description": "El mejor espacio de trabajo en Gijón",
        }