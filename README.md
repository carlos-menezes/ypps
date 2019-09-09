# ypps
> Your Personal Pasting Space.

---

## What
ypps is a weekend-long project created by Carlos Menezes.

It is not more than a clone of Hastebin (and, to some extent, Pastebin), as it's only use is pasting and sharing content anonymously with other people (with syntax highlighting for code).

---

## How
1. Clone this repository.
2. Install dependencies:
   1. cd ypps && npm install
   2. cd ypps && cd server && npm install
   3. cd ypps && cd client && npm install
3. Rename `server/keys_sample.js` to `keys.js`. Change `mongodb.uri` to your instance of MongoDB Atlas' URI. Create a new project, a new database and cluster named `yaps` in order to get the aforementioned URI.
4. Run `$ npm start` in the root directory.
5. Visit `localhost:3000`.

---

## Author

* Carlos Menezes | [GitHub](https://github.com/carlos-menezes)