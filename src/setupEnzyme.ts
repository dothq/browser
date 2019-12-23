import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
const adapter = ReactSixteenAdapter as any;
configure({ adapter: new adapter.default() });
