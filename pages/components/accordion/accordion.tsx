import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next'

export default function SimpleAccordion() {
    const { t:translate } = useTranslation('home')
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{translate('tools')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {translate('accordionSumary1')}  
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:'flex'}}>
              Scrum, Windons 11, Mac OS, Linux Ubuntu, Azure, AWS, VS Code, Jupyter.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{translate('code')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {translate('accordionSumary2')}  
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:'flex'}}>
              <h3>
                JavaScript, TypeScript, NodeJS, AdminJS, SQL Server,
                React, Vite, NextJs, React Native, Angular 9, Vue.js,
                Python, Django, Flask, Wordpress, Cypress, RxJS, Redux, Pandas, AMP, Ionic.
              </h3>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{translate('toolsWork')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {translate('accordionSumary3')}  
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:'flex'}}>
              HTML, CSS, Figma, Adobe, Photoshop, Material UI, Flex Box, Sass
              , Styled Components, Vuetify, Tailwind CSS, Ionic Framework.
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}