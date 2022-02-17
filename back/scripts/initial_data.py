def main():
    import sys

    sys.path.insert(0, "")

   
    from src.domain.spaces import Space, SpacesRepository

    database_path = "data/database.db"

    espacio_1 = Space(
        id= "space1",
        name= "Espacio 1",
        image= "https://get.pxhere.com/photo/interior-home-ceiling-workspace-loft-property-living-room-room-meeting-room-decor-interior-design-design-estate-real-estate-dining-room-wok-space-1392243.jpg",
        price= "300",
        contact= "prueba@example.com",
        city= "Bilbao",
        description= "Espacio acogedor en el centro de Bilbao",
    )

    espacio_2 = Space(
        id= "space2",
        name= "Espacio 2",
        image= "https://get.pxhere.com/photo/desk-floor-home-loft-office-property-living-room-furniture-room-office-space-meeting-room-apartment-interior-design-design-real-estate-dining-room-start-up-meeting-space-1390056.jpg",
        price= "500",
        contact= "example@prueba.com",
        city= "Gijón",
        description= "El mejor espacio de trabajo en Gijón",
    )

    space_repository = SpacesRepository(database_path)
    space_repository.save(espacio_1)
    space_repository.save(espacio_2)


if __name__ == '__main__':
    main()
