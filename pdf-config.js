module.exports = {
    launch_options: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    stylesheet: 'resume.css',
    body_class: 'markdown-body',
    css: `
        .markdown-body {
            font-size: 11px;
            line-height: 1.5;
            max-width: 210mm;
            margin: 0 auto;
        }
    `,
    pdf_options: {
        format: 'A4',
        margin: '20mm',
        printBackground: true
    }
};

