from urllib import response
from src.lib.utils import temp_file
from src.webserver import create_app
from src.domain.spaces import Space, SpacesRepository

def test_should_save_space():
    
    space_repository = SpacesRepository(temp_file())
    app = create_app(repositories={"space": space_repository})
    client = app.test_client()

    body = {
            "id": "space1",
            "name": "Espacio 1",
            "image": "",
            "price": "300",
            "contact": "prueba@example.com",
            "city": "Bilbao",
            "description": "Espacio acogedor en el centro de Bilbao",
        }
    response = client.post("/api/space", json=body)

    assert response.status_code == 200

    response_get = client.get("/api/space/space1")

    assert response_get.json == {
            "id": "space1",
            "name": "Espacio 1",
            "image": "",
            "price": "300",
            "contact": "prueba@example.com",
            "city": "Bilbao",
            "description": "Espacio acogedor en el centro de Bilbao",
        }