import type { CharacterResponse } from '$lib/server/httpConsumers/rickAndMorty/models/responses/characters';

export class SingleCharacterDto {
	character: CharacterResponse;

	constructor(characterResponse: CharacterResponse | undefined) {
		this.character = characterResponse ?? ({} as CharacterResponse);
	}
}
