import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IsAnAltStoreInstallPlugin)
public class IsAnAltStoreInstallPlugin: CAPPlugin {
    private let implementation = IsAnAltStoreInstall()

    @objc func isAltStoreInstallation(_ call: CAPPluginCall) {
        let urlSchemePrefix = "altstore-" 
        var urlSchemeFound = false
        
        if let urlTypes = Bundle.main.infoDictionary?["CFBundleURLTypes"] as? [[String: Any]] {
            for urlType in urlTypes {
                if let urlSchemes = urlType["CFBundleURLSchemes"] as? [String] {
                    for urlScheme in urlSchemes {
                        if urlScheme.hasPrefix(urlSchemePrefix) {
                            urlSchemeFound = true
                            break
                        }
                    }
                }
                if urlSchemeFound {
                    break
                }
            }
        }
        
        call.resolve([
            "isAltStored": urlSchemeFound
        ])
    }
}
