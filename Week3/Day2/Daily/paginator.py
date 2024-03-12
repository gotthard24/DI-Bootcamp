class Pagination():
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.currentPage = 0
        self.pageAmount = len(items) // pageSize
        
    def getVisibleItems(self):
        visible = []
        interval = self.currentPage * self.pageSize
        for i in range(interval, interval + self.pageSize):
            if i < len(self.items):
                visible.append(self.items[i])
                print(self.items[i], end=" ")
        print()
        return visible
    
    def current(self):
        print(f"Current page is {self.currentPage}")
        
    def prevPage(self):
        self.currentPage -= 1
        if self.currentPage < 0:
            self.currentPage = self.pageAmount
        self.current()
        return self
    
    def nextPage(self):
        self.currentPage += 1
        if self.currentPage > self.pageAmount:
            self.currentPage = 0
        self.current()
        return self
    
    def firstPage(self):
        self.currentPage = 0
        self.current()
        return self
    
    def lastPage(self):
        self.currentPage = self.pageAmount
        self.current()
        return self
    
    def goToPage(self, page):
        while page > self.pageAmount:
            page -= self.pageAmount
        while page < 0:
            page += self.pageAmount
        self.currentPage = page
        self.current()
        return self
        
        
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.prevPage().prevPage()
p.getVisibleItems()
p.firstPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.goToPage(4)
p.getVisibleItems()