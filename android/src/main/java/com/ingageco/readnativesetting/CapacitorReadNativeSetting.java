package com.ingageco.readnativesetting;

import com.getcapacitor.JSObject;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import android.app.Activity;


@CapacitorPlugin(name="CapacitorReadNativeSetting")
public class CapacitorReadNativeSetting extends Plugin {

    @PluginMethod
    public void read(PluginCall call) {
        String key = call.getString("key");

        final Activity activity = getActivity();

        String packageName = activity.getPackageName();

        int resId = activity.getResources().getIdentifier(key, "string", packageName);
        String value = activity.getString(resId);

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
