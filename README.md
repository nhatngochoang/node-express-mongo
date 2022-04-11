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
npm i fs
npm i bcrypt cookie-parser jsonwebtoken --save
npm i jwt-decode
npm i redux-persist
```

# Create jwt_key
```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
```
# Format public key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub

# Add .gitignore

```bash
> .gitignore
git add .gitignore
git commit -m "message" .gitignore
```

# Add public and static files

```bash
npm i path
```


# Router with params ➥ last
# Middle Chaining like Promise.then() ➥ req go 1 same Router road
https://www.youtube.com/watch?v=txd2TmXoEn8&list=PLodO7Gi1F7R1GMefX_44suLAaXnaNYMyC&index=4

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
https://www.youtube.com/watch?v=fiUk7G-QHSQ
🍌 USER GROUP
🍉 FUNCTION GROUP

.findByIdAndUpdate(id, {
   info: newInfoValue
})

id = req.params.id
.deleteOne({
   _id: idParam
})