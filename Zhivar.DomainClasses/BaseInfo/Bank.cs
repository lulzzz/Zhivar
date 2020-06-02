﻿using OMF.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zhivar.DomainClasses.Common;
using static OMF.Common.Enums;

namespace Zhivar.DomainClasses.BaseInfo
{
    public class Bank:LoggableEntity,IActivityLoggable
    {
        public ActionLog ActionsToLog => ActionLog.Insert | ActionLog.Update | ActionLog.Delete;
        public string Name { get; set; }
        public string FullName { get; set; }
        public string AccountNumber { get; set; }
        public string Branch { get; set; }
        public decimal Balance { get; set; }
        public string Code { get; set; }
        public int OrganId { get; set; }

    }
}
