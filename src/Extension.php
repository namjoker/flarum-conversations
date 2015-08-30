<?php namespace JakeB\Conversations;

use Flarum\Support\Extension as BaseExtension;
use Illuminate\Events\Dispatcher;

class Extension extends BaseExtension
{
    public function listen(Dispatcher $events)
    {
        $events->subscribe('JakeB\Conversations\Listeners\AddClientAssets');
    }
}
