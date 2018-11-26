[English text follows below ]
# 205-services-http-crud

Dit project bestaat uit twee delen:
- een server (met `json-server`) die de CRUD-requests verwerkt. Deze
server voert de handelingen nu *live* uit in het bestandje `cities.json`.
- een client, die op de gebruikelijke wijze wordt gestart met `npm start`.

## Werkwijze
- Voer `npm install` uit.
- Start eerst de server met `npm run json-server`
- Open een nieuw terminal-venster.
- Start dan de client met `npm start`.

## Resetten van cities
- als je alle cities hebt verwijderd, is `cities.json` leeg! Restore dit eventueel door de inhoud van `cities-original.json` te kopieren.

# English description
This project consists of two parts:
- a server (with `json-server`) that is capturing the CRUD requests (b/c browsers cannout look outside their own scope).
This server updates a small file, called `cities.json`.
- a client : start it in the usual way with `npm start`.

## How to use
- Do a regular `npm install`.
- First, start the server by running `npm run json-server`.
- Open a new Terminal window, or command prompt.
- Second, start the client by running `npm start`.

## Resetting the cities
- If you have accidentally deleted all cities (remember, the CRUD-server really does a destructive update on the .json-file) you can restore
it by copying the contents of `cities-original.json` to `cities.json`.
