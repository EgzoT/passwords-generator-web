# passwords-generator-web

Web passwords generator

# Application link

[https://egzot.github.io/passwords-generator-web/](https://egzot.github.io/passwords-generator-web/)

# Compose

## Start compose

```sh
sudo docker compose up
```

## Stop compose

```sh
sudo docker compose down
```

## Install new npm package

```sh
sudo docker exec -it passwords-generator-web-passwords-generator-web-1 bash
cd passwords-generator-web
npm i <package_name>
```

## Uninstall npm package

```sh
sudo docker exec -it passwords-generator-web-passwords-generator-web-1 bash
cd passwords-generator-web
npm uninstall <package_name>
```

## Restart compose

```sh
sudo docker compose restart
```

# Deploy gh-page

## Clone gh-pages to new folder

```sh
git clone --single-branch --branch gh-pages https://github.com/EgzoT/passwords-generator-web.git
```

## Build main branch repo and copy files to gh-pages branch

```sh
npm run build
```

## Push changes

```sh
git add .
git commit -m "Updates"
git push
```
