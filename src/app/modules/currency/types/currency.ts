import { TransportObject } from '../../shared/models/transport-object.interface';

export class Currency implements TransportObject {
    constructor(name: string, shortName: string) {
        this.name = name;
        this.shortName = shortName;
    }

    name: string;
    shortName: string;
}
