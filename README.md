# resume-builder

Fills a clear, simple resume template with user-defined information. Includes option to print/save to PDF. ATS-friendly. For future improvements: implement choices of different resume templates for different situations.

# Known issues:

## Google Chrome:

- printing to PDF may cause unnecessary extra page to appear; can be resolved by only choosing to save the relevant pages on popup

## Mozilla Firefox:

- printing to PDF may cause unnecessary extra page to appear and most content shifted to this extra page; resolution pending
- printing to PDF will not show certain styles seen in the Preview (most colours and shading will be missing); resolution pending

# Built with:

- ReactJS
- Styled Components
- React Icons (https://www.npmjs.com/package/react-icons)
- ReactToPrint (https://www.npmjs.com/package/react-to-print)
- uuid for sample key ids (https://www.npmjs.com/package/uuid)

# Start

- cd resume-builder
- npm install
- npm start
