/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    testEventControllersActions: {
        test: [function(cmp) {
            var inner = cmp.find("withActions");
            $A.test.clickOrTouch(inner.getElement());
        },
        function(cmp) {
            var expected = "Changed Label on Press# Location:test_Events_ClientActionsController# Event:testPress";
            var actual = $A.test.getText(cmp.find("withActions").getElement());
            $A.test.assertEquals(expected, actual);
        }]
    },
    
    testEventControllersWithoutActions: {
        test: [function(cmp) {
            var inner = cmp.find("noActions");
            $A.test.clickOrTouch(inner.getElement());
        },
        function(cmp) {
            var expected = "#No Events Generated#. Click or Mouse Over to Trigger an event but no Client Action";
            var actual = $A.test.getText(cmp.find("noActions").getElement());
            $A.test.assertEquals(expected, actual);
        }]
    }
})