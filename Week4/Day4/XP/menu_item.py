import psycopg2
import config

class MenuItem():
    def __init__(self, name = None, price = None):
        self.name = name
        self.price = price
    
    def __repr__(self) -> str:
        return f'{self.name} is for {self.price}$'
        
    def _execute_query(self, query, parameters=None):
        results = []
        connection = config.create_connection()
        cursor = connection.cursor()       
        if parameters:
            cursor.execute(query, parameters)
        else:
            cursor.execute(query)
        try:    
            results = cursor.fetchall()
        except:
            pass
        connection.commit()
        connection.close()
        if len(results) > 0:
            return results
        
    def save(self):
        query = f"""
        INSERT INTO {config.TABLENAME} (item_name, item_price)
        VALUES
            (%s, %s);
        """  
        
        self._execute_query(query, (self.name, self.price))
        
    def delete(self):
        query = f"""
        DELETE FROM {config.TABLENAME}
        WHERE item_name = %s and item_price = %s;
        """
        
        self._execute_query(query, (self.name, self.price))
        
    def update(self, name = None, price = None):
        if name:
            query = f"""
            UPDATE {config.TABLENAME}
            SET item_name = %s
            WHERE item_name = %s
            """
            self._execute_query(query, (name, self.name))
            self.name = name
        if price:
            query = f"""
            UPDATE {config.TABLENAME}
            SET item_price = %s
            WHERE item_name = %s
            """
            self._execute_query(query, (price, self.name))
            self.price = price
            
        return self
    
    @classmethod
    def get_item(cls, name):
        item = MenuItem()
        query = f"""
            SELECT * FROM {config.TABLENAME}
            WHERE item_name = %s LIMIT 1
        """
        results = item._execute_query(query, (name,))
        
        item_id, item_name, item_price = results[0]
        item = cls(item_name, item_price)
        return item
           
# fries = MenuItem('Fries', 5)
# fries.save()
# fries.delete()
# # cupcake = fries.update('Cupcake', 3)
# # fries = cupcake.update('Fries', 1)
# icecream = fries.update('icecream')
# icecream.update('Icecream')
# icecream.update
# print(MenuItem.get_item('Icecream'))