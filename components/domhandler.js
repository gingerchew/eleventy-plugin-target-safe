const { JSDOM } = require('jsdom');
const { SAFETARGETS } = require('./constants.js');

const DOMHandler = (content) => {
    const dom = new JSDOM(content);

    const document = dom.window.document;

    // Private
    
    // all safe targets are lowercase so compared ones should be as well
    // also want to trim any space just in case
    // if true, the target value is safe and does not need a rel noopener|noreferrer
    // if false, add rel values as config dictates
    const _isSafeTargetValue = el => SAFETARGETS.includes(el.target.trim().toLowerCase());

    const _filterSafeTargets = array => {
        if (array.length < 1) return array;

        return array.filter(el => !_isSafeTargetValue(el));
    }

    // Public
    // @TODO should this be just for the a[target] or for any a tag that is outbound?
    const getAllLinkElements = () => {
        const _els = Array.from(document.querySelectorAll(`a[target]`));

        return _filterSafeTargets(_els);
    }

    const getAllFormElements = () => {
        const _els = Array.from(document.querySelectorAll(`form[target]`));

        return _filterSafeTargets(_els);
    }

    // const checkRelValues = el => el.hasAttribute('rel') && el.rel.length > 0 && el.rel.split(' ').filter(rel => rel !== '');

    const getSerializedDOM = () => dom.serialize();

    return {
        $DOCUMENT: document,
        getAllFormElements,
        getAllLinkElements,
        getSerializedDOM
    }
}

module.exports = DOMHandler;