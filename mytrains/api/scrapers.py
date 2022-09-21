import urllib.request


def scrape(URLs): 
    prices = []

    for i in range(0,5):
        baseURL = URLs[i]
        print('here srcaping',baseURL,i)
        u = urllib.request.urlopen(
                    baseURL)  # The url you want to open
        # print(u)
        myfile = u.read()
        # print(myfile)
        # print(type(myfile))
        myString = myfile.decode("UTF-8")
        # print(type(myString))
        finder = 'Buy cheapest for &#163;'
        index = myString.find(finder)
        # print(index)
        price = myString[(index + len(finder) + 1):(index + len(finder) + 5)]
        prices.append(price)

    return prices



