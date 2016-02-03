import {Component} from 'angular2/core';
import {Tabs} from './tabs.component'
import {Tab} from "./tab.component";
@Component({
	selector  : 'tabs-app',
	template  : `
		<tabs>
			<tab tabTitle="Foo">
				<h2>Foo</h2>
				<p>Content of tab Foo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque doloribus est fugit illum iste itaque magnam minus, necessitatibus, officiis sed sit, tempore vero. Doloremque facere id officiis quibusdam quo.</p>
			</tab>
			<tab tabTitle="Bar">
			<h2>Bar</h2>
				<p>Content of tab Bar. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque aut, autem, corporis debitis dicta dignissimos incidunt ipsa ipsum laborum maiores minus quaerat quis quo reiciendis repellendus sint sunt åut.</p>
			</tab>
		</tabs>
	`,
	directives: [Tabs, Tab]
})

export class App {

}