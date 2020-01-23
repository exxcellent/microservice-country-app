import { TransportObject } from '../../shared/models/transport-object.interface';

export class Language implements TransportObject {

    constructor(shortName: string, name: string) {
        this.name = name;
        this.shortName = shortName;
    }

    shortName: string;
    name: string;
}
