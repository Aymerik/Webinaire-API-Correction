# API de l'exercice Todolist
(API basée sur [JSON Server](https://github.com/typicode/json-server))

## Installation et lancement de l'API

1. Téléchargez le fichier `db.json`
2. Ouvrez un terminal depuis le dossier contenant le fichier `db.json`
3. Tapez la commande `npm install -g json-server` (npm non installé ? [Installer npm](https://www.npmjs.com/get-npm)) 
4. Tapez la commande `json-server --watch db.json`

## Documentation

Différentes routes sont à votre disposition : 
<table>
<tr>
  <th>URL</th>
  <th>Requête</th>
  <th>Réponse</th>
</tr>
<tr>
  <td>GET http://localhost:3000/tasks</td>
  <td>-</td>
  <td>Statut : 200  
  <pre>[{
  "id": 1,
  "name": "Appeler la banque",
  "done": false,
  "deadline": "2020-11-13"
}]</pre>
</tr>
<tr>
  <td>GET http://localhost:3000/tasks/{id}</td>
  <td>-</td>
  <td>Statut : 200  
  <pre>{
  "id": 1,
  "name": "Appeler la banque",
  "done": false,
  "deadline": "2020-11-13"
}</pre>
</tr>
<tr>
  <td>POST http://localhost:3000/tasks</td>
  <td>  <pre>{
  "name": "Appeler la banque",
  "done": false,
  "deadline": "2020-11-13"
}</pre></td>
  <td>Statut : 201
  <pre>{
  "id": 1,
  "name": "Appeler la banque",
  "done": false,
  "deadline": "2020-11-13"
}</pre>
</tr>
<tr>
  <td>PUT http://localhost:3000/tasks/{id}</td>
  <td>  <pre>{
  "id": 1,
  "name": "Appeler l'assurance",
  "done": false,
  "deadline": "2020-11-14"
}</pre></td>
  <td>Statut : 200
  <pre>{
  "id": 1,
  "name": "Appeler l'assurance",
  "done": false,
  "deadline": "2020-11-14"
}</pre>
</tr>
<tr>
  <td>PATCH http://localhost:3000/tasks/{id}</td>
  <td>  <pre>{
  "done": true
}</pre></td>
  <td>Statut : 200
  <pre>{
  "id": 1,
  "name": "Appeler l'assurance",
  "done": true,
  "deadline": "2020-11-14"
}</pre>
</tr>
<tr>
  <td>DELETE http://localhost:3000/tasks/{id}</td>
  <td>-</td>
  <td>Statut : 200  
  <pre>{}</pre>
</tr>
</table>

