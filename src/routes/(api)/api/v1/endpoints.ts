import { DummyJsonEndpoints } from './dummy-json/products/dummyJsonEndpoints';
import { RickAndMortyEndpoints } from './rick-and-morty/rickAndMortyEndpoints';

export abstract class Endpoints {
	static dummyJson = DummyJsonEndpoints;
	static rickAndMorty = RickAndMortyEndpoints;
}
