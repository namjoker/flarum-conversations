import SessionDropdown from 'flarum/components/SessionDropdown';
import addConversationDropdownLink from 'conversations/addConversationDropdownLink';

app.initializers.add('conversations', function(app) {
    addConversationDropdownLink();
});