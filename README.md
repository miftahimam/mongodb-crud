# mongodb-crud

## List of routes

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `/books` | GET | `none` | `none` | Get all books info |
| `/books/` | POST | `none` | `isbn:String`,`title:String`,`author:String`,`category:String`,`stock:Number` | Create a book |
| `/books/:id` | DELETE | `none` | `_id` | Delete a book by its id |
| `/books/:id` | PUT | `none` | `title:String`, `field:String`, `value:String` | Update a book with new info by its title |
| `/books/:id` | GET | `none` | `_id` | Get a book info by its _id |

## Usage

Make sure you have Node.js and npm installed on your computer, then run these commands:

``` 
npm install
npm run dev
```

Access the  on `http://localhost:4000/`