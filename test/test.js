const path = require("path");
const test = require("ava");
const sao = require("sao");

const generator = path.join(__dirname, "..");

// Generate a project using the "Next.js" option
test("Next.js template", async (t) => {
  const answers = {
    name: "portable-project",
    description: "A thing that does stuff",
    author: "John Smith <john@portable.com.au>",
    type: "nextjs",
  };
  const stream = await sao.mock({ generator }, answers);

  // Read the generated package.json and check the information is correct
  const pkg = JSON.parse(await stream.readFile("package.json"));
  t.is(pkg.name, answers.name);
  t.is(pkg.description, answers.description);
  t.is(pkg.author, answers.author);
  t.deepEqual(pkg.contributors, [answers.author]);
});
