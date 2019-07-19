const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Discord = require('discord.js')

mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true }, (err) => {
  if (err) return console.log('Erro ao conectar na database!')
  console.log('Conectado ao BANCO DE DADOS!')
})

const Users = new Schema({
userID: String,
Smiles: {type: Number, default: 0},
Doador: {type: Boolean, default: false},
// Donate: {type: Number, default: 0},
Ban: {type: Boolean, default: false},
CasadoCom: {type: Array, default: []},
Casado: {type: Boolean, default: false},
Criador: {type: Boolean, default: false},
Partner: {type: Boolean, default: false},
Segurança: {type: Boolean, default: false},
Suporte: {type: Boolean, default: false},
Reps: {type: Number, default: 0},
RepLastTime: {type: String, default: '0000'},
coinsLastTime: {type: String, default: '0000'},
// Keys: {type: Number, default: 0}
});

const Guilds = new Schema({
_id: String,
Lang: {type: String, default: "pt-BR"},
Welcome: {type: Boolean, default: false},
WelcomeChannel: {type: String, default: "Nenhum"},
Leave: {type: Boolean, default: false},
LeaveChannel: {type: String, default: "Nenhum"},
Partner: {type: Boolean, default: false},
Principal: {type: Boolean, default: false},
Suggests: {type: Boolean, default: false},
ChatSuggests: {type: String, default: 'Nenhum'},
Contador: {type: Boolean, default: false},
ChatContador: {type: String, default: 'Nenhum'},
AntiInvite: {type: Boolean, default: false},
AutoRole: {type: Boolean, default: false},
AutoRoleID: {type: String, default: "Nenhum"},
IgnoreChannel: {type: String, default: ""},
IgnoreMembersChannel: {type: String, default: ""}  
})

const Keys = new Schema({
id: String,
Used: {type: Boolean, default: false},
UsedOn: String,
userID: String,
})

var UsersDB = mongoose.model('Users', Users);
var GuildsDB = mongoose.model('Guilds', Guilds);
var KeysDB = mongoose.model('Keys', Keys);

exports.Guilds = GuildsDB
exports.Users = UsersDB
exports.Keys = KeysDB
