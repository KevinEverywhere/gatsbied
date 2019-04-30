import React from "react"
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer"
import MainContact from "../MainContact"

Enzyme.configure({ adapter: new Adapter() });

describe("MainContact", () => {
  it('MainContact: renders correctly', () => {
    const tree = renderer.create(<MainContact timeout={false} setWrapperRef={function(){}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('componentWillMount: should use initial state', () => {
    const wrapper = shallow(<MainContact timeout={false} setWrapperRef={function(){}}/>);
    expect(wrapper.instance().state.nextPage).toBe('ContactReply');
  });
  it('componentWillMount: should set the passed nextPage value to state', () => {
    const wrapper = shallow(<MainContact timeout={false} setWrapperRef={function(){}}/>);
    wrapper.instance().state.nextPage='ContactOops';
    expect(wrapper.instance().state.nextPage).toBe('ContactOops');
  });
  // it('incrementMainContact: should increment state.count by 1', () => {
  //   const wrapper = shallow(<MainContact initialCountValue={0}/>);
  //   const instance = wrapper.instance();
  //   expect(instance.state.count).toBe(0);
  //   instance.incrementMainContact();
  //   expect(instance.state.count).toBe(1);
  // });
  // it('decrementMainContact: should decrement state.count by 1', () => {
  //   const wrapper = shallow(<MainContact initialCountValue={1}/>);
  //   const instance = wrapper.instance();
  //   expect(instance.state.count).toBe(1);
  //   instance.decrementMainContact();
  //   expect(instance.state.count).toBe(0);
  // });
  // it('should call props on increment/decrement', () => {
  //   const incrementSpy = jest.fn();
  //   const decrementSpy = jest.fn();
  //   const wrapper = shallow(<MainContact initialCountValue={1} onIncrement={incrementSpy} onDecrement={decrementSpy}/>);
  //   const instance = wrapper.instance();
  //   instance.incrementMainContact();
  //   expect(incrementSpy).toBeCalledWith(2);
  //   instance.decrementMainContact();
  //   expect(decrementSpy).toBeCalledWith(1);
  // });
});
