import math
import turtle

class Circle():
    P = 3.14
    
    def __init__(self, radius=None):
        self.radius = radius
        self.diameter = radius * 2
        self.area = self.calc_area()
    
    def __repr__(self):
        return f'radius: {self.radius}, diametr: {self.diameter}, area: {self.area}'
    
    def __add__(self, other):
        if isinstance(other, Circle):
            new_area = self.area + other.area
            return Circle(Circle.calc_radius(new_area))
        
    def __lt__(self, other):
        return self.radius < other.radius
    def __gt__(self, other):
        return self.radius > other.radius
    def __le__(self, other):
        return self.radius <= other.radius
    def __ge__(self, other):
        return self.radius >= other.radius
    def __eq__(self, other):
        return self.radius == other.radius
    def __ne__(self, other):
        return self.radius != other.radius
            
    @staticmethod
    def calc_radius(area):
        return math.sqrt(area/Circle.P)
    
    def calc_area(self):
        return Circle.P * self.radius ** 2
    
    def draw_circle(self):
        turtle.penup()
        turtle.goto(0, -self.radius)
        turtle.pendown()
        turtle.circle(self.radius)
    
circle1 = Circle(10)
circle2 = Circle(10)
circle5 = Circle(100)
circle6 = Circle(40)
circle7 = Circle(60)
circle8 = Circle(75)
circle9 = Circle(250)
print(circle1.area)
print(repr(circle1))
print(circle2.area)
print(repr(circle2))
circle3 = circle1 + circle2
print(circle3)
print(circle2 > circle1)
print(circle2 == circle1)
circle4 = Circle(1)
circles = [circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle9]
print(sorted(circles))

for circle in sorted(circles):
    circle.draw_circle()