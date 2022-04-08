## Link:  https://www.youtube.com/watch?v=JJ7Mqdv37BA&list=PL_lU_BGnu31IJ1YqDkSq84ekElIG1E_iy
# node-express-mongo
 Backend for react-ecommerce-shop

# Install 

```bash
npm init -y
npm install -g babel-cli
npm i --save nodemon express babel-cli babel-preset-env babel-preset-stage-0 dotenv
npm i body-parser --save
npm i mongoose --save
npm i formidable --save
npm i cors --save
npm i cors --save
npm i bcrypt cookie-parser jsonwebtoken --save
npm i jwt-decode
npm i redux-persist
```

# Add .gitignore

```bash
> .gitignore
git add .gitignore
git commit -m "message" .gitignore
```

# JSON WEB TOKEN 🍏 ➥ CMND

git rm .env --cached
git rm env.local --cached
git rm env.staging --cached
git commit -m "Stopped tracking .env File"

# STORE TOKEN 🍎   
➥ 1.Local Storage ➥ XSS
➥ 2.HTTPONLY Cookie ➥ CSRF ⚔️ SAMESITE

🍋🍋🍋 REDUX STORE ⚙️ ACCESS TOKEN + HTTPONLY Cookie ⚙️ REFRESH TOKEN

⚓️ BFF PATTERN ➥ SAFE

# REFRESH TOKEN
🛰 access token (in headers) ➨ identify who are you
🚀 refresh token (in cookies) ➨ if access token expires, make a new access token

# AUTHORIZATION
🍌 USER GROUP
🍉 FUNCTION GROUP