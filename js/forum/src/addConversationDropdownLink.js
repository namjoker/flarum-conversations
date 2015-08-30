import { extend } from 'flarum/extend';
import app from 'flarum/app';
import SessionDropdown from 'flarum/components/SessionDropdown';

import LinkButton from 'flarum/components/LinkButton';

export default function addConversationDropdownLink() {
    extend(SessionDropdown.prototype, 'items', function(items, user) {
        items.add('conversations',
            LinkButton.component({
                icon: 'comments',
                children: app.trans('conversations.conversations')
                //href: app.route.user(user)
            }),
            0
        );
    });
}
