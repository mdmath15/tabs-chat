// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator('componente', {
    description: 'Criar um novo componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.types.tsx',
        templateFile: 'plop-templates/component.types.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
        templateFile: 'plop-templates/component.styles.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component.index.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Criar um novo hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do hook',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/use{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/hook.hbs',
      },
    ],
  });
};
