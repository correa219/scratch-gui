import projectData from './project.json';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./90f076c9ffd01e812286f71876e63426.wav';
import meowWav from '!arraybuffer-loader!./6759f61e9032714c2683e40004d8edd9.wav';
import thirdSound from '!arraybuffer-loader!./6bc773bfba71d39b88554bc97348647a.wav';
// switching from '!raw-loader! --> !arraybuffer-load
import backdrop from '!arraybuffer-loader!./d9fe27d34e7d4ba7feefea61a0e8cb54.png';
// theres some question as to whether I can use format png and asset type ImageV
import astroCat from '!arraybuffer-loader!./639477dcf8c2bb3a02dda8f458ad6542.png';
import costume2 from '!arraybuffer-loader!./bf807b64c4bbb7c72d2c6a571cf147d6.png';
import phaserIcon from '!arraybuffer-loader!./8a646179221681aa214b5176683ded8b.png';
import glowIcon from '!arraybuffer-loader!./4abcb53e86b7d4f017333b971b8a6087.png';
import lightningIcon from '!arraybuffer-loader!./48964a9af45e4b842bcc667f2ce94bff.png';
import wordsIcon from '!arraybuffer-loader!./cfb860e932ed0b30aa6c71e89ede42c2.png';

/* eslint-enable import/no-unresolved */

const keyboardProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    // const projectJson = projectData(translator);
    return [{
        id: 2,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectData)
    }, {
        id: '90f076c9ffd01e812286f71876e63426',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '6759f61e9032714c2683e40004d8edd9',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(meowWav)
    }, {
        id: '6bc773bfba71d39b88554bc97348647a',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thirdSound)
    }, {
        id: 'd9fe27d34e7d4ba7feefea61a0e8cb54',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(backdrop)
    }, {
        id: '639477dcf8c2bb3a02dda8f458ad6542',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(astroCat)
    }, {
        id: '8a646179221681aa214b5176683ded8b',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(phaserIcon)
    }, {
        id: '4abcb53e86b7d4f017333b971b8a6087',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(glowIcon)
    }, {
        id: '48964a9af45e4b842bcc667f2ce94bff',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(lightningIcon)
    }, {
        id: 'cfb860e932ed0b30aa6c71e89ede42c2',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(wordsIcon)
    }, {
        id: 'bf807b64c4bbb7c72d2c6a571cf147d6',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(costume2)
    }];
};

export default keyboardProject;
