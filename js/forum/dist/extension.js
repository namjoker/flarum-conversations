System.register('conversations/addConversationDropdownLink', ['flarum/extend', 'flarum/app', 'flarum/components/SessionDropdown', 'flarum/components/LinkButton'], function (_export) {
    'use strict';

    var extend, app, SessionDropdown, LinkButton;

    _export('default', addConversationDropdownLink);

    function addConversationDropdownLink() {
        extend(SessionDropdown.prototype, 'items', function (items, user) {
            items.add('conversations', LinkButton.component({
                icon: 'comments',
                children: app.trans('conversations.conversations')
                //href: app.route.user(user)
            }), 0);
        });
    }

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsSessionDropdown) {
            SessionDropdown = _flarumComponentsSessionDropdown['default'];
        }, function (_flarumComponentsLinkButton) {
            LinkButton = _flarumComponentsLinkButton['default'];
        }],
        execute: function () {}
    };
});
System.register('conversations/main', ['flarum/components/SessionDropdown', 'conversations/addConversationDropdownLink'], function (_export) {
    'use strict';

    var SessionDropdown, addConversationDropdownLink;
    return {
        setters: [function (_flarumComponentsSessionDropdown) {
            SessionDropdown = _flarumComponentsSessionDropdown['default'];
        }, function (_conversationsAddConversationDropdownLink) {
            addConversationDropdownLink = _conversationsAddConversationDropdownLink['default'];
        }],
        execute: function () {

            app.initializers.add('conversations', function (app) {
                addConversationDropdownLink();
            });
        }
    };
});