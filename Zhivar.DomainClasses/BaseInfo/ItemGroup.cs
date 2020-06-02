﻿using OMF.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zhivar.DomainClasses.Common;
using static OMF.Common.Enums;

namespace Zhivar.DomainClasses.BaseInfo
{
    public class ItemGroup:LoggableEntity, IActivityLoggable
    {
        public ActionLog ActionsToLog => ActionLog.Insert | ActionLog.Update | ActionLog.Delete;
        public string Name { get; set; }
        public int OrganID { get; set; }
        public bool? IsGroupSaze { get; set; }
        //[ForeignKey("Items")]
        //public int ItemID { get; set; }
        //public virtual ICollection<Item> Items { get; set; }
        public List<Item> Items { get; set; }
    }
}
