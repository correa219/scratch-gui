import projectData from './project.json';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!arraybuffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';
import backdrop from '!raw-loader!./f7fb71e7a9b1e609efd3d161475fdc3f.svg';
import costume1 from '!raw-loader!./fccbaeaf3ab585f2195ae69ce0820e86.svg';
import costume2 from '!raw-loader!./0fb9be3e8397c983338cb71dc84d0b25.svg';
/* eslint-enable import/no-unresolved */

const defaultPirateProject = translator => {
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
        id: 1,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectData)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '83c36d806dc92327b9e7049a565c6bff',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(meowWav)
    }, {
        id: 'f7fb71e7a9b1e609efd3d161475fdc3f',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: 'fccbaeaf3ab585f2195ae69ce0820e86',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume1)
    }, {
        id: '0fb9be3e8397c983338cb71dc84d0b25',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume2)
    }];
};

export default defaultPirateProject;
