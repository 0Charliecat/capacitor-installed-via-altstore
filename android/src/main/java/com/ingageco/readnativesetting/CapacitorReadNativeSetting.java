package com.ingageco.readnativesetting;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CapacitorReadNativeSetting extends Plugin {

    @PluginMethod
    public void read(PluginCall call) {
        String key = call.getString("key");

        int resId = getResources().getIdentifier(key, "string");
        String value = activity.getString(resId);

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}
