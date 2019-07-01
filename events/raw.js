const Discord = require("discord.js")

module.exports = async (vary, message, member, dados) => {
        if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
        if(dados.d.message_id != "568553773115375617") return
    
        let servidor = vary.guilds.get("500452776770535444")
        let membro = servidor.members.get(dados.d.user_id)
    
        let cargo1 = servidor.roles.get('557555132645244958'),
            cargo2 = servidor.roles.get('557555132645244958'),
            cargo3 = servidor.roles.get('557555132645244958')
    
        if(dados.t === "MESSAGE_REACTION_ADD"){
            if(dados.d.emoji.id === "529318444924010539"){
                if(membro.roles.has(cargo1)) return
                membro.addRole(cargo1)
            }else if(dados.d.emoji.id === "529266822961430548"){
                if(membro.roles.has(cargo2)) return
                membro.addRole(cargo2)
            }else if(dados.d.emoji.id === "545161740875333632"){
                if(membro.roles.has(cargo3)) return
                membro.addRole(cargo3)
            }
        }
        if(dados.t === "MESSAGE_REACTION_REMOVE"){
            if(dados.d.emoji.id === "529318444924010539"){
                if(membro.roles.has(cargo1)) return
                membro.removeRole(cargo1)
            }else if(dados.d.emoji.id === "529266822961430548"){
                if(membro.roles.has(cargo2)) return
                membro.removeRole(cargo2)
            }else if(dados.d.emoji.id === "545161740875333632"){
                if(membro.roles.has(cargo3)) return
                membro.removeRole(cargo3)
               }
            }
        })
}
