import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorReadNativeSetting)
public class CapacitorReadNativeSetting: CAPPlugin {

     @objc func read(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""

        let value = Bundle.main.object(forInfoDictionaryKey: key) as? String

        call.success([
            "value": value
        ])
    }
}
