const zod = require('zod');

//writing zod for all three end points 


/*
post
{
    title:String
    description:String
}

put
{
   id: String 
}
*/



const schema1 = zod.object({
    title:zod.string(),
    description:zod.string()
});

const schema2= zod.object({
    id:zod.string()
});

module.exports = {schema1,
    schema2
}

