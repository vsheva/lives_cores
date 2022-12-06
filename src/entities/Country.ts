import SportEvent from './SportEvent';

type Country = {
  name: string;
  code: string;
};

export type CountrySportEvent = Pick<SportEvent, 'id' | 'name' | 'isFavorite'>;

export default Country;
