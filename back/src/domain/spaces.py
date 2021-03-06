import sqlite3


class Space:
    def __init__(self, id, name, image, price, contact, city, description):
        self.id = id
        self.name = name
        self.image = image
        self.price = price
        self.contact = contact
        self.city = city
        self.description = description

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "price": self.price,
            "contact": self.contact,
            "city": self.city,
            "description": self.description,
        }


class SpacesRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            create table if not exists spaces(
                id varchar PRIMARY KEY,
                name varchar,
                image varchar,
                price varchar,
                contact varchar,
                city varchar,
                description varchar

            )        
        """

        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_spaces(self):
        sql = """SELECT * from spaces"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)

        data = cursor.fetchall()

        spaces = []
        for item in data:
            space = Space(**item)
            spaces.append(space)
        return spaces


    def get_by_id(self, id):
        sql = """SELECT * FROM spaces WHERE id=:id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})

        data = cursor.fetchone()
        space = Space(**data)

        return space


    def save(self, space):
        sql = """insert into spaces (id, name, image, price, contact, city, description) values (:id, :name, :image, :price, :contact, :city, :description)"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, space.to_dict())
        conn.commit()
