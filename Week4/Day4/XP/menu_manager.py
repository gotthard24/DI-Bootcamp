from menu_item import MenuItem
import config

class MenuManager():           
    @classmethod
    def get_by_name(cls, name):
        try:
            item = MenuItem.get_item(name)
        except:
            return None
        return item
    
    @classmethod
    def get_all(cls):
        query = f"""
            SELECT * FROM {config.TABLENAME}
        """
        connection = config.create_connection()
        cursor = connection.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        connection.commit()
        connection.close() 
        
        return results
    
# print(MenuManager.get_by_name('Icecream'))
# MenuManager.get_all()