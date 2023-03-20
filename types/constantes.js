import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const tools = [
    'Scrum',
    'Windons 11',
    'Mac OS',
    'Linux Ubuntu',
    'Azure',
    'AWS',
    'VS Code',
    'Jupyter',
  ]
  export const listTools = tools.map((tools) =>
    <Stack spacing={8} className="py-1">
        <Chip label={tools} variant="outlined" />
    </Stack>
    );

  const code = [
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'AdminJS',
    'SQL Server',
    'React',
    'Vite',
    'NextJs',
    'React Native',
    'Angular 9',
    'Vue.js',
    'Python',
    'Django',
    'Flask',
    'Wordpress',
    'Cypress',
    'RxJS',
    'Redux',
  ]
  export const listCodes = code.map((tech) =>
  <Stack spacing={8} className="py-1">
    <Chip label={tech} variant="outlined" />
  </Stack>
 
  );

  const techs = [
    'HTML',
    'CSS',
    'Figma',
    'Adobe',
    'Photoshop',
    'Material UI',
    'Flex Box',
    'Sass',
    'Styled Components',
    'Vuetify',
    'Tailwind CSS',
    'Ionic Framework'
  ]

  export const listItems = techs.map((tech) =>
    <div style={{display:'flex!important', flexDirection: 'row'}}>
        <Chip label='HTML' variant="outlined" /><Chip label='HTML' variant="outlined" />
    </div>
  );