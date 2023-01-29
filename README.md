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
