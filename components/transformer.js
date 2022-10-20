const kleur = require('kleur/colors');
const { RELVALUES } = require('./constants.js');
const DOMHandler = require('./domhandler.js');

function Transformer(content, config) {
    const handler = DOMHandler(content);

    // All these links are filtered to only be 
    // unsafe [target] links
    const links = handler.getAllLinkElements();
    const { opener, follower, referrer } = config;
    
    for (const link of links) {
        if (!link.rel || link.rel.length === 0) link.rel = '';

        const _rel = link.rel.trim().split(' ');
    
        if (opener && !(_rel.includes(RELVALUES[0]))) _rel.push(RELVALUES[0]);

        if (follower && !(_rel.includes(RELVALUES[1]))) _rel.push(RELVALUES[1]);

        if (referrer && !(_rel.includes(RELVALUES[2]))) _rel.push(RELVALUES[2]);
        
        link.setAttribute('rel', _rel.join(' '));
    }

    return handler.getSerializedDOM();
}

module.exports = Transformer;