package space.charliecat.capplugins.isaltstored;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "IsAnAltStoreInstall")
public class IsAnAltStoreInstallPlugin extends Plugin {

    private IsAnAltStoreInstall implementation = new IsAnAltStoreInstall();

    @PluginMethod
    public void isAltStoreInstallation(PluginCall call) {
        ret.put("isAltStored", false);
        call.resolve(ret);
    }
}
