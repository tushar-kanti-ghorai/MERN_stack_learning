const zod=require("zod");
const schema=zod.array(zod.number);
const kidney=[1,2,3];
const responce=schema.safeParse(kidney);
