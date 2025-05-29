'use strict';

const BaseMessageComponent = require('./BaseMessageComponent');

class NewComponent extends BaseMessageComponent {
    constructor(data = {}) {
        super({ type: 17 });
        this.setup(data);
    }

    setup(data) {
        this.content = "";
        data.components.map(c => {
            // Text
            if (c.type === 10) {
                this.content += `${c.content}\n`
            } 
            // Components
            else if (c.type === 1){
                this.components = c.components.map(_c => BaseMessageComponent.create(_c));
            }
        });
    }


    toJSON() {
        return {
          content: this.content?.length > 0 ? this.content : null,
          type: "NEW_COMPONENT",
          components: this.components
        };
      }
}

module.exports = NewComponent;
