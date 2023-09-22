import { IdGenerator } from "../domain/IdGenerator.js";

export class IdGeneratorMath extends IdGenerator {
    generate() {
        return Math.random();
    }
}
